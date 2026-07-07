#include <stdio.h>
#include <stdlib.h>
#include "evidence.h"
#include "graph.h"

/* include the implementations so you can compile only main.c */
#include "evidence.c"
#include "graph.c"

int main() {
    EvidenceStack stack;
    Graph g;
    initStack(&stack);
    initGraph(&g);

    int choice;
    char desc[100], s1[50], s2[50];

    while (1) {
        printf("\n=== CRIME EVIDENCE TRACKER ===\n");
        printf("1. Push Evidence\n");
        printf("2. Pop Evidence\n");
        printf("3. Display Evidence\n");
        printf("4. Add Connection between Suspects\n");
        printf("5. Find Connection Path\n");
        printf("6. Display Graph\n");
        printf("7. Exit\n");
        printf("Enter your choice: ");
        if (scanf("%d", &choice) != 1) {
            int t; while ((t = getchar()) != '\n' && t != EOF); // clear invalid input
            printf("Invalid input. Please enter a number.\n");
            continue;
        }
        getchar();

        switch (choice) {
            case 1:
                printf("Enter evidence description: ");
                if (!fgets(desc, sizeof(desc), stdin)) break;
                desc[strcspn(desc, "\n")] = '\0';
                pushEvidence(&stack, desc);
                break;
            case 2:
                popEvidence(&stack);
                break;
            case 3:
                displayEvidence(&stack);
                break;
            case 4:
                printf("Enter suspect 1: ");
                if (scanf("%49s", s1) != 1) { while (getchar() != '\n'); break; }
                printf("Enter suspect 2: ");
                if (scanf("%49s", s2) != 1) { while (getchar() != '\n'); break; }
                addConnection(&g, s1, s2);
                break;
            case 5:
                printf("Enter start suspect: ");
                if (scanf("%49s", s1) != 1) { while (getchar() != '\n'); break; }
                printf("Enter end suspect: ");
                if (scanf("%49s", s2) != 1) { while (getchar() != '\n'); break; }
                findConnection(&g, s1, s2);
                break;
            case 6:
                displayGraph(&g);
                break;
            case 7:
                printf("Exiting...\n");
                return 0;
            default:
                printf("Invalid choice!\n");
        }
    }
}

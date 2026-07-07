#include <stdio.h>
#include <string.h>
#include "evidence.h"

void initStack(EvidenceStack *s) {
    s->top = -1;
}

void pushEvidence(EvidenceStack *s, const char *desc) {
    if (s->top == MAX_EVIDENCE - 1) {
        printf("Stack full, cannot add more evidence.\n");
        return;
    }
    s->top++;
    strncpy(s->stack[s->top].description, desc, MAX_LENGTH - 1);
    s->stack[s->top].description[MAX_LENGTH - 1] = '\0';
    printf("Evidence added: %s\n", s->stack[s->top].description);
}

void popEvidence(EvidenceStack *s) {
    if (s->top == -1) {
        printf("No evidence to remove.\n");
        return;
    }
    printf("Removed evidence: %s\n", s->stack[s->top].description);
    s->top--;
}

void displayEvidence(EvidenceStack *s) {
    if (s->top == -1) {
        printf("No evidence in stack.\n");
        return;
    }
    printf("\nEvidence List (Top to Bottom):\n");
    for (int i = s->top; i >= 0; i--) {
        printf("  - %s\n", s->stack[i].description);
    }
}

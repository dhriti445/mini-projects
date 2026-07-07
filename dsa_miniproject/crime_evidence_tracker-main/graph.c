#include <stdio.h>
#include <string.h>
#include "graph.h"

void initGraph(Graph *g) {
    g->count = 0;
    for (int i = 0; i < MAX_SUSPECTS; i++)
        for (int j = 0; j < MAX_SUSPECTS; j++)
            g->adj[i][j] = 0;
}

int addSuspect(Graph *g, const char *name) {
    for (int i = 0; i < g->count; i++)
        if (strcmp(g->suspects[i].name, name) == 0)
            return i; // already exists

    strncpy(g->suspects[g->count].name, name, NAME_LEN - 1);
    g->suspects[g->count].name[NAME_LEN - 1] = '\0';
    return g->count++;
}

void addConnection(Graph *g, const char *name1, const char *name2) {
    int i = addSuspect(g, name1);
    int j = addSuspect(g, name2);
    g->adj[i][j] = g->adj[j][i] = 1;
    printf("Connection made between %s and %s\n", name1, name2);
}

void findConnection(Graph *g, const char *start, const char *end) {
    int visited[MAX_SUSPECTS] = {0}, queue[MAX_SUSPECTS], prev[MAX_SUSPECTS];
    int front = 0, rear = 0;
    int startIndex = -1, endIndex = -1;

    for (int i = 0; i < g->count; i++) {
        if (strcmp(g->suspects[i].name, start) == 0) startIndex = i;
        if (strcmp(g->suspects[i].name, end) == 0) endIndex = i;
    }

    if (startIndex == -1 || endIndex == -1) {
        printf("One or both suspects not found.\n");
        return;
    }

    for (int i = 0; i < MAX_SUSPECTS; i++) prev[i] = -1;

    queue[rear++] = startIndex;
    visited[startIndex] = 1;
    prev[startIndex] = -1;

    while (front < rear) {
        int cur = queue[front++];
        if (cur == endIndex) break;

        for (int i = 0; i < g->count; i++) {
            if (g->adj[cur][i] && !visited[i]) {
                queue[rear++] = i;
                visited[i] = 1;
                prev[i] = cur;
            }
        }
    }

    if (!visited[endIndex]) {
        printf("No connection between %s and %s\n", start, end);
        return;
    }

    printf("Connection path: ");
    int path[MAX_SUSPECTS], idx = 0;
    for (int at = endIndex; at != -1; at = prev[at])
        path[idx++] = at;
    for (int i = idx - 1; i >= 0; i--)
        printf("%s%s", g->suspects[path[i]].name, i ? " -> " : "\n");
}

void displayGraph(Graph *g) {
    printf("\nSuspect Network:\n");
    for (int i = 0; i < g->count; i++) {
        printf("%s connected to: ", g->suspects[i].name);
        for (int j = 0; j < g->count; j++)
            if (g->adj[i][j]) printf("%s ", g->suspects[j].name);
        printf("\n");
    }
}

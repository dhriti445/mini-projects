#ifndef GRAPH_H
#define GRAPH_H

#define MAX_SUSPECTS 50
#define NAME_LEN 50

typedef struct {
    char name[NAME_LEN];
} Suspect;

typedef struct {
    int adj[MAX_SUSPECTS][MAX_SUSPECTS];
    Suspect suspects[MAX_SUSPECTS];
    int count;
} Graph;

// Function declarations
void initGraph(Graph *g);
int addSuspect(Graph *g, const char *name);
void addConnection(Graph *g, const char *name1, const char *name2);
void findConnection(Graph *g, const char *start, const char *end);
void displayGraph(Graph *g);

#endif

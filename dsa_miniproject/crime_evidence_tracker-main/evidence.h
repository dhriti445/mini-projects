#ifndef EVIDENCE_H
#define EVIDENCE_H

#define MAX_EVIDENCE 100
#define MAX_LENGTH 100

typedef struct {
    char description[MAX_LENGTH];
} Evidence;

typedef struct {
    Evidence stack[MAX_EVIDENCE];
    int top;
} EvidenceStack;

// Function declarations
void initStack(EvidenceStack *s);
void pushEvidence(EvidenceStack *s, const char *desc);
void popEvidence(EvidenceStack *s);
void displayEvidence(EvidenceStack *s);

#endif

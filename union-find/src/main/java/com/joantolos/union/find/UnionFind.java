package com.joantolos.union.find;

public class UnionFind {
    private final int[] parent;
    private final int[] size;

    // Initialize union-find data structure with N objects (0 to N-1)
    public UnionFind(Integer n) {
        this.parent = new int[n];
        this.size = new int[n];
        for (int i = 0; i < n; i++){
            this.parent[i] = i;
            this.size[i] = 1;
        }
    }

    // Chase parent pointers until reach root
    private int root(int i) {
        while (i != parent[i]) {
            parent[i] = parent[parent[i]];
            i = parent[i];
        }
        return i;
    }

    // add connection between p and q
    public void union(int p, int q) {
        int i = root(p);
        int j = root(q);
        if (i == j) return;
        if (size[i] < size[j]) {
            parent[i] = j; size[j] += size[i];
        } else {
            parent[j] = i; size[i] += size[j];
        }
    }

    // are p and q in the same component?
    public boolean connected(int p, int q) {
        return root(p) == root(q);
    }
}

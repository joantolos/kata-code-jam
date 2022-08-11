package com.joantolos.binary.search.tree;

import org.junit.Assert;
import org.junit.Test;

public class BinarySearchTreeTest {

    private final BinarySearchTree binarySearchTree = new BinarySearchTree();

    @Test
    public void shouldComplyWithExampleOne() {
        BinarySearchTree.TreeNode treeOne = new BinarySearchTree.TreeNode(2, new BinarySearchTree.TreeNode(1), new BinarySearchTree.TreeNode(3));
        Assert.assertTrue(binarySearchTree.isValidBST(treeOne));
    }

    @Test
    public void shouldComplyWithExampleTwo() {
        BinarySearchTree.TreeNode treeTwo = new BinarySearchTree.TreeNode(5, new BinarySearchTree.TreeNode(1), new BinarySearchTree.TreeNode(4, new BinarySearchTree.TreeNode(3), new BinarySearchTree.TreeNode(6)));
        Assert.assertFalse(binarySearchTree.isValidBST(treeTwo));
    }
}

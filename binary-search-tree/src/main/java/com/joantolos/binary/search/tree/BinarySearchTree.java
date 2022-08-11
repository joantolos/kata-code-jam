package com.joantolos.binary.search.tree;

public class BinarySearchTree {

    public boolean isValidBST(TreeNode root) {
        if (root.left == null || root.right == null || root.left.val > root.val || root.right.val < root.val || !isValidBST(root.left) || !isValidBST(root.right)) {
            return false;
        }
        return true;
    }

    static class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode() {}
        TreeNode(int val) { this.val = val; }
        TreeNode(int val, TreeNode left, TreeNode right) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }

}

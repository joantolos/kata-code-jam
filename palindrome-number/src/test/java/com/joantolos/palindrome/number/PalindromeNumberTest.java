package com.joantolos.palindrome.number;

import org.junit.Assert;
import org.junit.Test;

public class PalindromeNumberTest {

    private final PalindromeNumber palindromeNumber = new PalindromeNumber();

    @Test
    public void shouldComplyWithExampleOne() {
        Assert.assertTrue(palindromeNumber.isPalindrome(121));
    }

    @Test
    public void shouldComplyWithExampleTwo() {
        Assert.assertFalse(palindromeNumber.isPalindrome(-121));
    }

    @Test
    public void shouldComplyWithExampleThree() {
        Assert.assertFalse(palindromeNumber.isPalindrome(10));
    }

    @Test
    public void shouldComplyWithExampleFour() {
        Assert.assertFalse(palindromeNumber.isPalindrome(-101));
    }
}

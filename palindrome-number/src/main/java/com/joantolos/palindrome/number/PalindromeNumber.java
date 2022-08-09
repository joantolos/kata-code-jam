package com.joantolos.palindrome.number;

public class PalindromeNumber {

    public boolean isPalindrome(int x) {
        String number = String.valueOf(x);
        int startIndex = 0;
        int endIndex = number.length() - 1;

        while (startIndex < endIndex) {
            if(number.charAt(startIndex++) != number.charAt(endIndex--)) return false;
        }
        return true;
    }
}

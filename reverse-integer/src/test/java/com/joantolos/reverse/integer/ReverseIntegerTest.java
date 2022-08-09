package com.joantolos.reverse.integer;

import org.junit.Assert;
import org.junit.Test;

public class ReverseIntegerTest {

    ReverseInteger reverseInteger = new ReverseInteger();

    @Test
    public void shouldComplyWithExampleOne() {
        Assert.assertEquals(321, reverseInteger.run(123));
    }

    @Test
    public void shouldComplyWithExampleTwo() {
        Assert.assertEquals(-321, reverseInteger.run(-123));
    }

    @Test
    public void shouldComplyWithExampleThree() {
        Assert.assertEquals(21, reverseInteger.run(120));
    }

    @Test
    public void shouldComplyWithExampleFour() {
        Assert.assertEquals(0, reverseInteger.run(0));
    }
}
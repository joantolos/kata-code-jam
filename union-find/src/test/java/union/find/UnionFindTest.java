package union.find;

import com.joantolos.union.find.UnionFind;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class UnionFindTest {

    private UnionFind unionFind = new UnionFind(10);

    @Before
    public void init() {
        //    The test will reproduce the following state
        //
        //     / \⠀⠀⠀⠀⠀⠀⠀⠀⠀/⠀\⠀⠀⠀⠀⠀⠀⠀⠀/⠀ \⠀⠀⠀⠀⠀⠀⠀ /  \⠀⠀⠀⠀⠀⠀⠀⠀/ ⠀\⠀
        //    | 0 |⠀⠀⠀⠀⠀⠀⠀| 1  |-------| 2 |⠀⠀⠀⠀⠀⠀⠀| 3 |--------|⠀4 |⠀
        //    ⠀\ /⠀⠀⠀⠀⠀⠀⠀⠀ \⠀/⠀⠀⠀⠀⠀⠀⠀⠀\  /⠀⠀⠀⠀⠀⠀⠀⠀\  /⠀⠀⠀⠀⠀⠀⠀⠀\ /
        //    ⠀⠀|⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ |⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ |⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀|⠀⠀
        //    ⠀⠀|⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ |⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀|⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀|⠀⠀
        //    ⠀ |⠀⠀⠀⠀⠀⠀⠀⠀⠀   ⠀⠀⠀⠀⠀⠀⠀⠀⠀ |⠀⠀⠀⠀⠀⠀⠀⠀⠀   |⠀⠀⠀⠀⠀⠀⠀⠀  |⠀
        //     / \          / \         /  \          /  \         / \
        //    | 5 |--------| 6 |⠀⠀⠀⠀⠀⠀| 7⠀ |⠀⠀⠀⠀⠀⠀⠀|  8 |⠀⠀⠀⠀⠀⠀| 9 |⠀
        //    ⠀\⠀/⠀⠀⠀⠀⠀⠀⠀⠀\  /⠀⠀⠀⠀⠀⠀⠀\   /⠀⠀⠀⠀⠀⠀⠀ \⠀  /⠀⠀⠀⠀⠀⠀⠀\⠀ /

        unionFind = new UnionFind(10);

        unionFind.union(0,5);
        unionFind.union(5,6);
        unionFind.union(1,2);
        unionFind.union(2,7);
        unionFind.union(3,8);
        unionFind.union(3,4);
        unionFind.union(4,9);
    }

    @Test
    public void twoAndSevenShouldBeConnected() {
        Assert.assertTrue(unionFind.connected(2, 7));
    }

    @Test
    public void threeAndEightShouldBeConnected() {
        Assert.assertTrue(unionFind.connected(3, 8));
    }

    @Test
    public void threeAndFourShouldBeConnected() {
        Assert.assertTrue(unionFind.connected(3, 4));
    }

    @Test
    public void nineAndEightShouldBeConnected() {
        Assert.assertTrue(unionFind.connected(9, 8));
    }

    @Test
    public void sixAndSevenShouldNotBeConnected() {
        Assert.assertFalse(unionFind.connected(6, 7));
    }

    @Test
    public void twoAndNineShouldNotBeConnected() {
        Assert.assertFalse(unionFind.connected(2, 9));
    }
}

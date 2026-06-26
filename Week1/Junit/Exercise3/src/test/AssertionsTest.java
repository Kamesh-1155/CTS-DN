import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

public class AssertionsTest {

    Calculator calculator = new Calculator();

    @Test
    void testAssertions() {

        // Assert Equals
        assertEquals(5, calculator.add(2, 3));

        // Assert True
        assertTrue(calculator.isPositive(10));

        // Assert False
        assertFalse(calculator.isPositive(-5));

        // Assert Null
        assertNull(calculator.getNullObject());

        // Assert Not Null
        assertNotNull(calculator.getObject());
    }
}
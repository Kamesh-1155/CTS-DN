import java.util.Scanner;
import java.util.Arrays;
import java.util.Comparator;
public class SearchFunction {
    // Linear Search
    public static Product linearSearch(Product[] products, String target) {
        for (Product product : products) {
            if (product.getProductName()
                    .equalsIgnoreCase(target)) {
                return product;
            }
        }
        return null;
    }
    // Binary Search
    public static Product binarySearch(Product[] products, String target) {
        int left = 0;
        int right = products.length - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            int result =
                    products[mid].getProductName().compareToIgnoreCase(target);
            if (result == 0) {
                return products[mid];
            }
            if (result < 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }
    public static void main(String[] args) {
        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Phone", "Electronics"),
                new Product(103, "Shoes", "Fashion"),
                new Product(104, "Watch", "Accessories"),
                new Product(105, "Tablet", "Electronics")
        };
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Product Name to Search: ");
        String searchName = sc.nextLine();
        // Linear Search
        Product linearResult =
                linearSearch(products, searchName);
        if (linearResult != null) {
            System.out.println("\nLinear Search Result:");
            System.out.println(linearResult);
        } else {
            System.out.println("\nProduct not found using Linear Search");
        }
        // Sort array for Binary Search
        Arrays.sort(products, Comparator.comparing(Product::getProductName));
        Product binaryResult =binarySearch(products, searchName);
        if (binaryResult != null) {
            System.out.println("\nBinary Search Result:");
            System.out.println(binaryResult);
        } else {
            System.out.println("\nProduct not found using Binary Search");
        }
        sc.close();
    }
}
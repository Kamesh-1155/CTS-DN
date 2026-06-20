import java.util.Scanner;

public class FinancialForecast {
    public static double forecast(double currentValue, double growthRate, int years) {
        if (years == 0) {
            return currentValue;
        }
        return forecast(currentValue * (1 + growthRate),growthRate,years - 1);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter Current Value: ");
        double currentValue = sc.nextDouble();
        System.out.print("Enter Growth Rate (%): ");
        double growthRate = sc.nextDouble();
        System.out.print("Enter Number of Years: ");
        int years = sc.nextInt();
        double futureValue = forecast(currentValue, growthRate / 100, years);
        System.out.printf("Future Value after %d years = %.2f",years, futureValue);
        sc.close();
    }
}
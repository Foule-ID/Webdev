// src/Main.java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        ToDoList toDoList = new ToDoList();
        Scanner scanner = new Scanner(System.in);
        String command;

        System.out.println("Welcome to the To-Do List App!");
        do {
            System.out.println("\nEnter a command (add, remove, view, exit):");
            command = scanner.nextLine();

            switch (command.toLowerCase()) {
                case "add":
                    System.out.println("Enter task description:");
                    String description = scanner.nextLine();
                    toDoList.addTask(description);
                    break;
                case "remove":
                    System.out.println("Enter task number to remove:");
                    int index = scanner.nextInt() - 1;
                    scanner.nextLine(); // consume newline
                    toDoList.removeTask(index);
                    break;
                case "view":
                    toDoList.displayTasks();
                    break;
                case "exit":
                    System.out.println("Exiting the application.");
                    break;
                default:
                    System.out.println("Unknown command. Please try again.");
            }
        } while (!command.equalsIgnoreCase("exit"));

        scanner.close();
    }
}

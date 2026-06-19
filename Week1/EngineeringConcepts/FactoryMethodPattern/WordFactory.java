package EngineeringConcepts.FactoryMethodPattern;

public class WordFactory extends DocumentFactory {

    @Override
    public Document createDocument() {
        return new WordDocument();
    }
}
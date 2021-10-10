import Card from "../../components/Card";
import Container from "../../components/Container";
import InputField from "../../components/InputField";
import PageHeader from "../../components/PageHeader";
import SubmitButton from "../../components/SubmitButton";

const AddBrand = () => {
    return (
        <Card>
            <Container>
                <PageHeader title="Add Brand" />
                <form className="mt-4">
                    <InputField label="Name" type="text" placeholder="Ener your name" />
                    <InputField label="Image" type="file" />
                    <SubmitButton text="Submit" />
                </form>
            </Container>
        </Card>
    );
}

export default AddBrand;
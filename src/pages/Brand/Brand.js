import IconButton from "../../components/IconButton";
import Card from "../../components/Card";
import PageHeader from "../../components/PageHeader";
import Column from "../../components/Table/Column";
import CustomTable from "../../components/Table/CustomTable";
import HeadingRow from "../../components/Table/HeadingRow";
import Row from "../../components/Table/Row";
import {
    AiFillEdit,
    AiTwotoneDelete
} from "react-icons/ai";
import Container from "../../components/Container";

const Brand = () => {
    return (
        <Card>
            <Container>
                <PageHeader title="All Brands" to="/add_brand" />
            </Container>
            <CustomTable>
                <thead>
                    <HeadingRow>
                        <Column>Number</Column>
                        <Column>Name</Column>
                        <Column>Image</Column>
                        <Column>Action</Column>
                    </HeadingRow>
                </thead>
                <tbody>
                    <Row>
                        <Column>01</Column>
                        <Column>Bata</Column>
                        <Column>$...</Column>
                        <Column>
                            <IconButton className="mr-2" to="/" color="bg-green-600"><AiFillEdit /></IconButton>
                            <IconButton className="mr-2" to="/" color="bg-red-600"><AiTwotoneDelete /></IconButton>
                        </Column>
                    </Row>
                    <Row>
                        <Column>01</Column>
                        <Column>Bata</Column>
                        <Column>$...</Column>
                        <Column>
                            <IconButton className="mr-2" to="/" color="bg-green-600"><AiFillEdit /></IconButton>
                            <IconButton className="mr-2" to="/" color="bg-red-600"><AiTwotoneDelete /></IconButton>
                        </Column>
                    </Row>
                    <Row>
                        <Column>01</Column>
                        <Column>Bata</Column>
                        <Column>$...</Column>
                        <Column>
                            <IconButton className="mr-2" to="/" color="bg-green-600"><AiFillEdit /></IconButton>
                            <IconButton className="mr-2" to="/" color="bg-red-600"><AiTwotoneDelete /></IconButton>
                        </Column>
                    </Row>
                    <Row>
                        <Column>01</Column>
                        <Column>Bata</Column>
                        <Column>$...</Column>
                        <Column>
                            <IconButton className="mr-2" to="/" color="bg-green-600"><AiFillEdit /></IconButton>
                            <IconButton className="mr-2" to="/" color="bg-red-600"><AiTwotoneDelete /></IconButton>
                        </Column>
                    </Row>
                </tbody>
            </CustomTable>
        </Card>
    );
}

export default Brand;
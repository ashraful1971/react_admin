import {
    AiOutlineHome
} from "react-icons/ai";
import InfoCard from "../components/InfoCard";
import Column from "../components/Table/Column";
import CustomTable from "../components/Table/CustomTable";
import HeadingRow from "../components/Table/HeadingRow";
import Row from "../components/Table/Row";

const Dashboard = () => {
    return (
        <div>
            <div className="flex justify-between space-x-4 my-4">
                <InfoCard number="5,125" heading="Total Sales" icon={<AiOutlineHome />} />
                <InfoCard number="5,125" heading="Total Sales" icon={<AiOutlineHome />} />
                <InfoCard number="5,125" heading="Total Sales" icon={<AiOutlineHome />} />
                <InfoCard number="5,125" heading="Total Sales" icon={<AiOutlineHome />} />
            </div>
            <div className="flex justify-between space-x-4 my-2">
                <div className="flex-1 justify-between shadow-sm rounded-md bg-white">
                    <CustomTable>
                        <thead>
                            <HeadingRow>
                                <Column>Invoice Number</Column>
                                <Column>Date</Column>
                                <Column>Amount</Column>
                                <Column>Type</Column>
                                <Column>Status</Column>
                            </HeadingRow>
                        </thead>
                        <tbody>
                            <Row>
                                <Column>123456789</Column>
                                <Column>25/06/2021</Column>
                                <Column>$254</Column>
                                <Column>Sell</Column>
                                <Column>Completed</Column>
                            </Row>
                            <Row>
                                <Column>123456789</Column>
                                <Column>25/06/2021</Column>
                                <Column>$254</Column>
                                <Column>Sell</Column>
                                <Column>Completed</Column>
                            </Row>
                            <Row>
                                <Column>123456789</Column>
                                <Column>25/06/2021</Column>
                                <Column>$254</Column>
                                <Column>Sell</Column>
                                <Column>Completed</Column>
                            </Row>
                            <Row>
                                <Column>123456789</Column>
                                <Column>25/06/2021</Column>
                                <Column>$254</Column>
                                <Column>Sell</Column>
                                <Column>Completed</Column>
                            </Row>
                            <Row>
                                <Column>123456789</Column>
                                <Column>25/06/2021</Column>
                                <Column>$254</Column>
                                <Column>Sell</Column>
                                <Column>Completed</Column>
                            </Row>
                            <Row>
                                <Column>123456789</Column>
                                <Column>25/06/2021</Column>
                                <Column>$254</Column>
                                <Column>Sell</Column>
                                <Column>Completed</Column>
                            </Row>
                            <Row>
                                <Column>123456789</Column>
                                <Column>25/06/2021</Column>
                                <Column>$254</Column>
                                <Column>Sell</Column>
                                <Column>Completed</Column>
                            </Row>
                            <Row>
                                <Column>123456789</Column>
                                <Column>25/06/2021</Column>
                                <Column>$254</Column>
                                <Column>Sell</Column>
                                <Column>Completed</Column>
                            </Row>
                            <Row>
                                <Column>123456789</Column>
                                <Column>25/06/2021</Column>
                                <Column>$254</Column>
                                <Column>Sell</Column>
                                <Column>Completed</Column>
                            </Row>
                            <Row>
                                <Column>123456789</Column>
                                <Column>25/06/2021</Column>
                                <Column>$254</Column>
                                <Column>Sell</Column>
                                <Column>Completed</Column>
                            </Row>
                            <Row>
                                <Column>123456789</Column>
                                <Column>25/06/2021</Column>
                                <Column>$254</Column>
                                <Column>Sell</Column>
                                <Column>Completed</Column>
                            </Row>
                            <Row>
                                <Column>123456789</Column>
                                <Column>25/06/2021</Column>
                                <Column>$254</Column>
                                <Column>Sell</Column>
                                <Column>Completed</Column>
                            </Row>
                        </tbody>
                    </CustomTable>
                </div>
                <div className="flex-1 justify-between flex shadow-sm rounded-md items-center bg-white">
                    <CustomTable>
                        <thead>
                            <HeadingRow>
                                <Column>Invoice Number</Column>
                                <Column>Date</Column>
                                <Column>Amount</Column>
                                <Column>Type</Column>
                                <Column>Status</Column>
                            </HeadingRow>
                        </thead>
                        <tbody>
                            <Row>
                                <Column>123456789</Column>
                                <Column>25/06/2021</Column>
                                <Column>$254</Column>
                                <Column>Sell</Column>
                                <Column>Completed</Column>
                            </Row>
                            <Row>
                                <Column>123456789</Column>
                                <Column>25/06/2021</Column>
                                <Column>$254</Column>
                                <Column>Sell</Column>
                                <Column>Completed</Column>
                            </Row>
                            <Row>
                                <Column>123456789</Column>
                                <Column>25/06/2021</Column>
                                <Column>$254</Column>
                                <Column>Sell</Column>
                                <Column>Completed</Column>
                            </Row>
                            <Row>
                                <Column>123456789</Column>
                                <Column>25/06/2021</Column>
                                <Column>$254</Column>
                                <Column>Sell</Column>
                                <Column>Completed</Column>
                            </Row>
                            <Row>
                                <Column>123456789</Column>
                                <Column>25/06/2021</Column>
                                <Column>$254</Column>
                                <Column>Sell</Column>
                                <Column>Completed</Column>
                            </Row>
                            <Row>
                                <Column>123456789</Column>
                                <Column>25/06/2021</Column>
                                <Column>$254</Column>
                                <Column>Sell</Column>
                                <Column>Completed</Column>
                            </Row>
                            <Row>
                                <Column>123456789</Column>
                                <Column>25/06/2021</Column>
                                <Column>$254</Column>
                                <Column>Sell</Column>
                                <Column>Completed</Column>
                            </Row>
                            <Row>
                                <Column>123456789</Column>
                                <Column>25/06/2021</Column>
                                <Column>$254</Column>
                                <Column>Sell</Column>
                                <Column>Completed</Column>
                            </Row>
                            <Row>
                                <Column>123456789</Column>
                                <Column>25/06/2021</Column>
                                <Column>$254</Column>
                                <Column>Sell</Column>
                                <Column>Completed</Column>
                            </Row>
                            <Row>
                                <Column>123456789</Column>
                                <Column>25/06/2021</Column>
                                <Column>$254</Column>
                                <Column>Sell</Column>
                                <Column>Completed</Column>
                            </Row>
                            <Row>
                                <Column>123456789</Column>
                                <Column>25/06/2021</Column>
                                <Column>$254</Column>
                                <Column>Sell</Column>
                                <Column>Completed</Column>
                            </Row>
                            <Row>
                                <Column>123456789</Column>
                                <Column>25/06/2021</Column>
                                <Column>$254</Column>
                                <Column>Sell</Column>
                                <Column>Completed</Column>
                            </Row>
                        </tbody>
                    </CustomTable>
                </div>
                {/* <div className="flex-1 justify-between flex shadow-sm rounded-md items-center p-5 bg-white"></div> */}
            </div>
        </div>
    );
}

export default Dashboard;
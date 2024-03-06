"use client";

import { IBusiness } from "@/interfaces/business.interface";
import useBusiness from "@/stores/business-store";
import { DatePicker, Form, InputNumber, Modal, Select } from "antd";
import React, { useState } from "react";

export type BookingType = {
    address: string;
    range_book: any;
    time_picker: string;
    num_of_humans: number;
    business_id: string;
};

interface CollectionCreateFormProps {
    open: boolean;
    onCreate: (values: BookingType) => void;
    onCancel: () => void;
}

const { RangePicker } = DatePicker;
const { Option } = Select;

export const CreateBookingForm: React.FC<CollectionCreateFormProps> = ({
    open,
    onCreate,
    onCancel,
}) => {
    const { business_list } = useBusiness();
    const [form] = Form.useForm();
    return (
        <Modal
            open={open}
            title="Hãy booking nơi mà bạn muốn đến !"
            className="text-xl"
            okText="Create"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                form.validateFields()
                    .then((values) => {
                        form.resetFields();
                        onCreate(values);
                    })
                    .catch((info) => {
                        console.log("Validate Failed:", info);
                    });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{ modifier: "public" }}
                color="red"
            >
                <Form.Item
                    name="address"
                    label="Province"
                    required
                    rules={[
                        { required: true, message: "Please select a province" },
                    ]}
                >
                    <Select placeholder="Select a province">
                        <Option value="An Giang">An Giang</Option>
                        <Option value="Bà Rịa - Vũng Tàu">
                            Bà Rịa - Vũng Tàu
                        </Option>
                        <Option value="Bắc Giang">Bắc Giang</Option>
                        <Option value="Bắc Kạn">Bắc Kạn</Option>
                        <Option value="Bạc Liêu">Bạc Liêu</Option>
                        <Option value="Bắc Ninh">Bắc Ninh</Option>
                        <Option value="Bến Tre">Bến Tre</Option>
                        <Option value="Bình Định">Bình Định</Option>
                        <Option value="Bình Dương">Bình Dương</Option>
                        <Option value="Bình Phước">Bình Phước</Option>
                        <Option value="Bình Thuận">Bình Thuận</Option>
                        <Option value="Cà Mau">Cà Mau</Option>
                        <Option value="Cao Bằng">Cao Bằng</Option>
                        <Option value="Đắk Lắk">Đắk Lắk</Option>
                        <Option value="Đắk Nông">Đắk Nông</Option>
                        <Option value="Điện Biên">Điện Biên</Option>
                        <Option value="Đồng Nai">Đồng Nai</Option>
                        <Option value="Đồng Tháp">Đồng Tháp</Option>
                        <Option value="Gia Lai">Gia Lai</Option>
                        <Option value="Hà Giang">Hà Giang</Option>
                        <Option value="Hà Nam">Hà Nam</Option>
                        <Option value="Hà Tĩnh">Hà Tĩnh</Option>
                        <Option value="Hải Dương">Hải Dương</Option>
                        <Option value="Hải Phòng">Hải Phòng</Option>
                        <Option value="Hậu Giang">Hậu Giang</Option>
                        <Option value="Hòa Bình">Hòa Bình</Option>
                        <Option value="Hưng Yên">Hưng Yên</Option>
                        <Option value="Khánh Hòa">Khánh Hòa</Option>
                        <Option value="Kiên Giang">Kiên Giang</Option>
                        <Option value="Kon Tum">Kon Tum</Option>
                        <Option value="Lai Châu">Lai Châu</Option>
                        <Option value="Lâm Đồng">Lâm Đồng</Option>
                        <Option value="Lạng Sơn">Lạng Sơn</Option>
                        <Option value="Lào Cai">Lào Cai</Option>
                        <Option value="Long An">Long An</Option>
                        <Option value="Nam Định">Nam Định</Option>
                        <Option value="Nghệ An">Nghệ An</Option>
                        <Option value="Ninh Bình">Ninh Bình</Option>
                        <Option value="Ninh Thuận">Ninh Thuận</Option>
                        <Option value="Phú Thọ">Phú Thọ</Option>
                        <Option value="Phú Yên">Phú Yên</Option>
                        <Option value="Quảng Bình">Quảng Bình</Option>
                        <Option value="Quảng Nam">Quảng Nam</Option>
                        <Option value="Quảng Ngãi">Quảng Ngãi</Option>
                        <Option value="Quảng Ninh">Quảng Ninh</Option>
                        <Option value="Quảng Trị">Quảng Trị</Option>
                        <Option value="Sóc Trăng">Sóc Trăng</Option>
                        <Option value="Sơn La">Sơn La</Option>
                        <Option value="Tây Ninh">Tây Ninh</Option>
                        <Option value="Thái Bình">Thái Bình</Option>
                        <Option value="Thái Nguyên">Thái Nguyên</Option>
                        <Option value="Thanh Hóa">Thanh Hóa</Option>
                        <Option value="Thừa Thiên Huế">Thừa Thiên Huế</Option>
                        <Option value="Tiền Giang">Tiền Giang</Option>
                        <Option value="Trà Vinh">Trà Vinh</Option>
                        <Option value="Tuyên Quang">Tuyên Quang</Option>
                        <Option value="Vĩnh Long">Vĩnh Long</Option>
                        <Option value="Vĩnh Phúc">Vĩnh Phúc</Option>
                        <Option value="Yên Bái">Yên Bái</Option>
                        <Option value="Đà Nẵng">Đà Nẵng</Option>
                        <Option value="Hà Nội">Hà Nội</Option>
                        <Option value="Hồ Chí Minh">Hồ Chí Minh</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="range_book"
                    label="Range Start"
                    required
                    rules={[
                        {
                            required: true,
                            message: "Please select time booking",
                        },
                    ]}
                >
                    <RangePicker />
                </Form.Item>
                <Form.Item
                    name="time_picker"
                    label="TimePicker"
                    rules={[
                        {
                            required: true,
                            message: "Please select time picker",
                        },
                    ]}
                >
                    <Select placeholder="Time Picker" allowClear>
                        <Option value="8:00">8:00</Option>
                        <Option value="8:30">8:30</Option>
                        <Option value="9:00">9:00</Option>
                        <Option value="9:30">9:30</Option>
                        <Option value="10:00">10:00</Option>
                        <Option value="10:30">10:30</Option>
                        <Option value="11:00">11:00</Option>
                        <Option value="11:30">11:30</Option>
                        <Option value="12:00">12:00</Option>
                        <Option value="12:30">12:30</Option>
                        <Option value="13:00">13:00</Option>
                        <Option value="13:30">13:30</Option>
                        <Option value="14:00">14:00</Option>
                        <Option value="14:30">14:30</Option>
                        <Option value="15:00">15:00</Option>
                        <Option value="15:30">15:30</Option>
                        <Option value="16:00">16:00</Option>
                        <Option value="16:30">16:30</Option>
                        <Option value="17:00">17:00</Option>
                        <Option value="17:30">17:30</Option>
                        <Option value="18:00">18:00</Option>
                        <Option value="18:30">18:30</Option>
                        <Option value="19:00">19:00</Option>
                        <Option value="19:30">19:30</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="num_of_humans"
                    label="Amount of people"
                    required
                    rules={[
                        {
                            required: true,
                            message: "Please select amount of people",
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>

                <Form.Item
                    name="business_id"
                    label="Business"
                    required
                    rules={[
                        { required: true, message: "Please select a business" },
                    ]}
                >
                    <Select placeholder="I'm Select" allowClear>
                        {business_list.length > 0 &&
                            business_list.map(
                                (ele: IBusiness, index: number) => {
                                    return (
                                        <Option value={ele.id}>
                                            {ele.name}
                                        </Option>
                                    );
                                }
                            )}
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    );
};

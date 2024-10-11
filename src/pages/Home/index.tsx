import PageHeader from "@/components/Common/PageHeader";
import ContentCard from "@/components/Common/ContentCard";


function Main() {
    return (
        <div className="col-span-12">
            <PageHeader title={'Home'} description={'Lorem Ipsum'} />
            <ContentCard title={"the card title"}>
                <p className="leading-relaxed">
                    The "Basic Table" component provides a straightforward
                    way to create structured tables in your web
                    applications. This table style is clean and minimal,
                    making it suitable for a wide range of use cases.
                </p>
            </ContentCard>
        </div>
    );
}

export default Main;

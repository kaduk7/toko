
export const metadata = {
    title: "Data Barang",
}

function LayoutProduk({ children }: { children: React.ReactNode }) {
    return (
        <div className="px-10 py-10">{children}</div>
    )
}

export default LayoutProduk
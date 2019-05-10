function peakFinder(arr, l, r)
{
    var n = r + l;
    if (n/2 >0 && (arr[n / 2] < arr[(n / 2) - 1]))
    {
        return peakFinder(arr, l, (n / 2) - 1);
    }
    else if ((n/2 < arr.Length-1) && (arr[n / 2] < arr[(n / 2) + 1]))
    {
        return peakFinder(arr, (n / 2) + 1, r);
    }
    else
    {
        return arr[n / 2];
    }
}
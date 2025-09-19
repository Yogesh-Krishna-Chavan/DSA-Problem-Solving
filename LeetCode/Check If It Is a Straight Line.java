class Solution {
    public boolean checkStraightLine(int[][] coordinates) {
        int[] p1 = coordinates[0];
        int[] p2 = coordinates[1];

        for (int index = 2; index < coordinates.length; index++) {
            int[] currPoint = coordinates[index];
            if ((currPoint[0] - p1[0]) * (p2[1] - p1[1]) != (p2[0] - p1[0]) * (currPoint[1] - p1[1])) {
                return false;
            }
        }

        return true;
    }
}
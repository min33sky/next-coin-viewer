import SearchBar from '@/components/SearchBar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function CoinsPage() {
  return (
    <main>
      <SearchBar />

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>코인 1</CardContent>
          <CardFooter>
            <Button>자세히</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>코인 2</CardContent>
          <CardFooter>
            <Button>자세히</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>코인 3</CardContent>
          <CardFooter>
            <Button>자세히</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>코인 4</CardContent>
          <CardFooter>
            <Button>자세히</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>코인 5</CardContent>
          <CardFooter>
            <Button>자세히</Button>
          </CardFooter>
        </Card>
      </ul>
    </main>
  );
}

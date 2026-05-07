import { Pressable, Text, View } from 'react-native';

import { copy1334 } from '../generated/copy/copy1334';
import { layout1334 } from '../generated/layouts/layout1334';
import { palette1334 } from '../generated/palettes/palette1334';

export function Screen1334() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout1334.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy1334.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1334.detail} / {palette1334.name}
			</Text>
		</View>
	);
}

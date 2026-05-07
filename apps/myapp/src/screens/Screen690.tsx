import { Pressable, Text, View } from 'react-native';

import { copy690 } from '../generated/copy/copy690';
import { layout690 } from '../generated/layouts/layout690';
import { palette690 } from '../generated/palettes/palette690';

export function Screen690() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout690.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy690.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy690.detail} / {palette690.name}
			</Text>
		</View>
	);
}

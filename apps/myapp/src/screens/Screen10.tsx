import { Pressable, Text, View } from 'react-native';

import { copy10 } from '../generated/copy/copy10';
import { layout10 } from '../generated/layouts/layout10';
import { palette10 } from '../generated/palettes/palette10';

export function Screen10() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout10.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy10.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy10.detail} / {palette10.name}
			</Text>
		</View>
	);
}

import { Pressable, Text, View } from 'react-native';

import { copy307 } from '../generated/copy/copy307';
import { layout307 } from '../generated/layouts/layout307';
import { palette307 } from '../generated/palettes/palette307';

export function Screen307() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout307.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy307.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy307.detail} / {palette307.name}
			</Text>
		</View>
	);
}

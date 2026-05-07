import { Pressable, Text, View } from 'react-native';

import { copy955 } from '../generated/copy/copy955';
import { layout955 } from '../generated/layouts/layout955';
import { palette955 } from '../generated/palettes/palette955';

export function Screen955() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout955.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy955.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy955.detail} / {palette955.name}
			</Text>
		</View>
	);
}

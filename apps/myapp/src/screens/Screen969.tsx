import { Pressable, Text, View } from 'react-native';

import { copy969 } from '../generated/copy/copy969';
import { layout969 } from '../generated/layouts/layout969';
import { palette969 } from '../generated/palettes/palette969';

export function Screen969() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout969.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy969.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy969.detail} / {palette969.name}
			</Text>
		</View>
	);
}

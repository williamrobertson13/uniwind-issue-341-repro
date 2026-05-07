import { Pressable, Text, View } from 'react-native';

import { copy708 } from '../generated/copy/copy708';
import { layout708 } from '../generated/layouts/layout708';
import { palette708 } from '../generated/palettes/palette708';

export function Screen708() {
	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout708.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy708.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy708.detail} / {palette708.name}
			</Text>
		</View>
	);
}

import { Pressable, Text, View } from 'react-native';

import { copy96 } from '../generated/copy/copy96';
import { layout96 } from '../generated/layouts/layout96';
import { palette96 } from '../generated/palettes/palette96';

export function Screen96() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout96.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy96.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy96.detail} / {palette96.name}
			</Text>
		</View>
	);
}

import { Pressable, Text, View } from 'react-native';

import { copy664 } from '../generated/copy/copy664';
import { layout664 } from '../generated/layouts/layout664';
import { palette664 } from '../generated/palettes/palette664';

export function Screen664() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout664.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy664.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy664.detail} / {palette664.name}
			</Text>
		</View>
	);
}

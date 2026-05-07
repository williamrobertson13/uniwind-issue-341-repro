import { Pressable, Text, View } from 'react-native';

import { copy64 } from '../generated/copy/copy64';
import { layout64 } from '../generated/layouts/layout64';
import { palette64 } from '../generated/palettes/palette64';

export function Screen64() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<View className={layout64.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy64.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy64.detail} / {palette64.name}
			</Text>
		</View>
	);
}

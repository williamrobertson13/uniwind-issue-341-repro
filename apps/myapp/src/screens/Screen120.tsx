import { Pressable, Text, View } from 'react-native';

import { copy120 } from '../generated/copy/copy120';
import { layout120 } from '../generated/layouts/layout120';
import { palette120 } from '../generated/palettes/palette120';

export function Screen120() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<View className={layout120.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy120.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy120.detail} / {palette120.name}
			</Text>
		</View>
	);
}

import { Pressable, Text, View } from 'react-native';

import { copy56 } from '../generated/copy/copy56';
import { layout56 } from '../generated/layouts/layout56';
import { palette56 } from '../generated/palettes/palette56';

export function Screen56() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout56.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300">{copy56.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy56.detail} / {palette56.name}
			</Text>
		</View>
	);
}

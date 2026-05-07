import { Pressable, Text, View } from 'react-native';

import { copy154 } from '../generated/copy/copy154';
import { layout154 } from '../generated/layouts/layout154';
import { palette154 } from '../generated/palettes/palette154';

export function Screen154() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout154.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy154.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy154.detail} / {palette154.name}
			</Text>
		</View>
	);
}

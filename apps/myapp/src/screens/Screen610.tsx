import { Pressable, Text, View } from 'react-native';

import { copy610 } from '../generated/copy/copy610';
import { layout610 } from '../generated/layouts/layout610';
import { palette610 } from '../generated/palettes/palette610';

export function Screen610() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout610.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy610.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy610.detail} / {palette610.name}
			</Text>
		</View>
	);
}

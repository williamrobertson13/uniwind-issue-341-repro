import { Pressable, Text, View } from 'react-native';

import { copy658 } from '../generated/copy/copy658';
import { layout658 } from '../generated/layouts/layout658';
import { palette658 } from '../generated/palettes/palette658';

export function Screen658() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout658.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy658.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy658.detail} / {palette658.name}
			</Text>
		</View>
	);
}

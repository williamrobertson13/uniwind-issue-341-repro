import { Pressable, Text, View } from 'react-native';

import { copy538 } from '../generated/copy/copy538';
import { layout538 } from '../generated/layouts/layout538';
import { palette538 } from '../generated/palettes/palette538';

export function Screen538() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout538.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy538.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy538.detail} / {palette538.name}
			</Text>
		</View>
	);
}

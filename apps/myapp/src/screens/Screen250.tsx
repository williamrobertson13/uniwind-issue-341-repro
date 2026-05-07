import { Pressable, Text, View } from 'react-native';

import { copy250 } from '../generated/copy/copy250';
import { layout250 } from '../generated/layouts/layout250';
import { palette250 } from '../generated/palettes/palette250';

export function Screen250() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout250.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy250.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy250.detail} / {palette250.name}
			</Text>
		</View>
	);
}

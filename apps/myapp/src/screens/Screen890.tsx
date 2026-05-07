import { Pressable, Text, View } from 'react-native';

import { copy890 } from '../generated/copy/copy890';
import { layout890 } from '../generated/layouts/layout890';
import { palette890 } from '../generated/palettes/palette890';

export function Screen890() {
	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<View className={layout890.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy890.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy890.detail} / {palette890.name}
			</Text>
		</View>
	);
}

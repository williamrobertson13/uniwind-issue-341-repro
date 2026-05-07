import { Pressable, Text, View } from 'react-native';

import { copy691 } from '../generated/copy/copy691';
import { layout691 } from '../generated/layouts/layout691';
import { palette691 } from '../generated/palettes/palette691';

export function Screen691() {
	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-11 bg-blue-800 rounded-full" />
			<View className={layout691.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800">{copy691.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy691.detail} / {palette691.name}
			</Text>
		</View>
	);
}

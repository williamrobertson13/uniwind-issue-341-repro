import { Pressable, Text, View } from 'react-native';

import { copy512 } from '../generated/copy/copy512';
import { layout512 } from '../generated/layouts/layout512';
import { palette512 } from '../generated/palettes/palette512';

export function Screen512() {
	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<View className={layout512.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900">{copy512.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy512.detail} / {palette512.name}
			</Text>
		</View>
	);
}

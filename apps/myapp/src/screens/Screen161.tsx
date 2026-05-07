import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy161 } from '../generated/copy/copy161';
import { layout161 } from '../generated/layouts/layout161';
import { palette161 } from '../generated/palettes/palette161';

const RuntimeView161 = withUniwind(View);

export function Screen161() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView161 styleClassName={layout161.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy161.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy161.detail} / {palette161.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}

import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy677 } from '../generated/copy/copy677';
import { layout677 } from '../generated/layouts/layout677';
import { palette677 } from '../generated/palettes/palette677';

const RuntimeView677 = withUniwind(View);

export function Screen677() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView677 styleClassName={layout677.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy677.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy677.detail} / {palette677.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}

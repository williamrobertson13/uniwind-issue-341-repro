import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy157 } from '../generated/copy/copy157';
import { layout157 } from '../generated/layouts/layout157';
import { palette157 } from '../generated/palettes/palette157';

const RuntimeView157 = withUniwind(View);

export function Screen157() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView157 styleClassName={layout157.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy157.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy157.detail} / {palette157.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}

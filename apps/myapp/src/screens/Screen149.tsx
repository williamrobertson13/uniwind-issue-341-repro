import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy149 } from '../generated/copy/copy149';
import { layout149 } from '../generated/layouts/layout149';
import { palette149 } from '../generated/palettes/palette149';

const RuntimeView149 = withUniwind(View);

export function Screen149() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView149 styleClassName={layout149.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy149.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy149.detail} / {palette149.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}

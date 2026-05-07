import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy197 } from '../generated/copy/copy197';
import { layout197 } from '../generated/layouts/layout197';
import { palette197 } from '../generated/palettes/palette197';

const RuntimeView197 = withUniwind(View);

export function Screen197() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView197 styleClassName={layout197.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy197.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy197.detail} / {palette197.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}

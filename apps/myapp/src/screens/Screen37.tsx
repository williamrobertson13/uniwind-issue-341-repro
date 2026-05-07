import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy37 } from '../generated/copy/copy37';
import { layout37 } from '../generated/layouts/layout37';
import { palette37 } from '../generated/palettes/palette37';

const RuntimeView37 = withUniwind(View);

export function Screen37() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView37 styleClassName={layout37.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy37.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy37.detail} / {palette37.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}

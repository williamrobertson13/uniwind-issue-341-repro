import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy581 } from '../generated/copy/copy581';
import { layout581 } from '../generated/layouts/layout581';
import { palette581 } from '../generated/palettes/palette581';

const RuntimeView581 = withUniwind(View);

export function Screen581() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView581 styleClassName={layout581.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy581.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy581.detail} / {palette581.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}

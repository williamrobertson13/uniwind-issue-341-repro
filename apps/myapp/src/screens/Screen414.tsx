import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy414 } from '../generated/copy/copy414';
import { layout414 } from '../generated/layouts/layout414';
import { palette414 } from '../generated/palettes/palette414';

const RuntimeView414 = withUniwind(View);

export function Screen414() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView414 styleClassName={layout414.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy414.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy414.detail} / {palette414.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}

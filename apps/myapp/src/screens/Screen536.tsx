import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy536 } from '../generated/copy/copy536';
import { layout536 } from '../generated/layouts/layout536';
import { palette536 } from '../generated/palettes/palette536';

const RuntimeView536 = withUniwind(View);

export function Screen536() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView536 styleClassName={layout536.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy536.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy536.detail} / {palette536.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
